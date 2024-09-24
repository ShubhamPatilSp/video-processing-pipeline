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
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Download videos from an AWS S3 bucket.
- Transcode videos into multiple resolutions (360p, 480p, 720p).
- Upload processed videos back to S3.
- Use of FFmpeg for high-quality video processing.

## Technologies

This project is built with the following technologies:

- **Node.js**: JavaScript runtime for building server-side applications.
- **FFmpeg**: A multimedia framework for processing video and audio.
- **AWS SDK**: A collection of tools for interacting with AWS services, particularly S3.
- **Docker**: Containerization for easy deployment and consistency across environments.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 18 or later) installed on your machine.
- **Docker** installed if you plan to run the project inside a container.
- An **AWS account** with S3 access.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/video-transcoder.git
   cd video-transcode


     
