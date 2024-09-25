# Video Transcoder

A powerful video transcoder that leverages AWS services to download videos from S3, transcode them into multiple resolutions, and upload the processed videos back to S3. This project uses Node.js, FFmpeg, and AWS SDK for seamless video processing.

![AWS Architecture](https://github.com/user-attachments/assets/3dccd270-6ad4-479f-b86b-cd612d105983)  
*Diagram of AWS architecture used in the project*

![Docker Setup](https://github.com/user-attachments/assets/f9c01c27-b8dd-4734-926c-4b657c8f29a0)  
*Docker setup for containerization and deployment*

![Terminal Output](https://github.com/user-attachments/assets/ec08538b-057b-450c-800c-447c7e633900)  
*Terminal output during video transcoding process*

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Features

- Download videos from an AWS S3 bucket.
- Transcode videos into multiple resolutions (360p, 480p, 720p).
- Upload processed videos back to S3.
- Uses FFmpeg for high-quality video processing.

## Technologies

This project is built with the following technologies:

- **Node.js**: JavaScript runtime for building server-side applications.
- **FFmpeg**: A multimedia framework for video and audio processing.
- **AWS SDK**: Tools for interacting with AWS services, particularly S3.
- **Docker**: Containerization for consistent deployment across environments.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 18 or later) installed on your machine.
- **Docker** installed, if you plan to run the project inside a container.
- An **AWS account** with S3 access.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/video-transcoder.git
   cd video-transcoder

```
## Docker Setup (Optional):
```bash
docker build -t video-transcoder .
docker run -it video-transcoder

```
## Environment Variables
```bash
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET_NAME=your-bucket-name
AWS_REGION=your-region
```
- This will automatically:
- Download videos from your specified S3 bucket.
- ranscode the videos into different resolutions using FFmpeg.
- Upload the processed videos back to the S3 bucket.
  
## Usage
```bah
npm run start

```
## Docker Usage
```bash
docker run -it video-transcoder

```
## Roadmap
Here are some upcoming features and improvements:

 - Implement basic video transcoding.
 - Support multiple resolutions (360p, 480p, 720p).
 - Upload processed videos to S3.
 - Add support for more formats (e.g., 1080p).
 - Improve error handling and logging.
 - Add cloud deployment options (e.g., AWS Lambda).
 - Integrate monitoring tools for performance tracking.
See the open issues for a full list of proposed features (and known issues).

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact
Your Name - Shubham Patil - xshuubhampatil@gmail.com

Project Link:[ https://github.com/ShubhamPatilSp/video-transcoder](https://github.com/ShubhamPatilSp/video-processing-pipeline)

## Acknowledgments
- FFmpeg Documentation
- AWS SDK Documentation
- Docker Documentation
- Node.js
