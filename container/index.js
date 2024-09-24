const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("node:fs/promises");
const fsOld = require("node:fs");
const path = require("node:path");

const ffmpeg = require("fluent-ffmpeg");
require("dotenv").config({ path: "./src/.env" }); // Load .env variables

const RESOLUTIONS = [
  { name: "360p", width: 480, height: 360 },
  { name: "480p", width: 858, height: 480 },
  { name: "720p", width: 1280, height: 720 },
];

// Instantiate the S3 client using environment variables
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Get environment variables for bucket and key
const BUCKET_NAME = process.env.BUCKET_NAME;
const KEY = process.env.KEY;

async function init() {
  // Download the original video
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: KEY,
  });

  const result = await s3Client.send(command);

  const originalFilePath = `original-video.mp4`;
  await fs.writeFile(originalFilePath, result.Body);

  const originalVideoPath = path.resolve(originalFilePath);

  // Start the transcoder
  const promises = RESOLUTIONS.map((resolution) => {
    const output = `videos-${resolution.name}.mp4`;
    return new Promise((resolve, reject) => {
      ffmpeg(originalVideoPath)
        .output(output)
        .withVideoCodec("libx264")
        .withAudioCodec("aac")
        .withSize(`${resolution.width}x${resolution.height}`)
        .on("end", async () => {
          const putCommand = new PutObjectCommand({
            Bucket: BUCKET_NAME, // Use environment variable
            Key: output,
            Body: fsOld.createReadStream(path.resolve(output)),
          });
          await s3Client.send(putCommand);
          console.log(`Uploaded ${output}`);
          resolve();
        })
        .format("mp4")
        .run();
    });
  });

  await Promise.all(promises);
}

// Start the process
init();
