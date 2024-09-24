# Video Transcoder

A powerful video transcoder that leverages AWS services to download videos from S3, transcode them into multiple resolutions, and upload the processed videos back to S3. This project uses Node.js, FFmpeg, and AWS SDK for seamless video processing.

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
   git clone https://github.com/ShubhamPatilSp/video-transcoder.git
   cd video-transcoder
