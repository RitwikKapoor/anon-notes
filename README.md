# Anonymous Notes

This websites allows users to post their notes and ideas anonymously that are publicly available. 

## Setting Up the Project and Running It Locally

**1.** In the server folder, create a `.env` file and set up the following environment variables:

```bash
DB_URL=
DB_TEST_URL=
```

**2.** In the client folder, create a `.env.local` file and set up the following environment variables:

```bash
VITE_APP_BASE_URL=
```
**3.** Run the following command to set up the environment locally using `docker-compose`:
   
 ```bash
docker-compose -f docker-compose.dev.yml up
```

## Deploying the project

**1.** First add all the following environment variables in your in actions under Secrets and variables in Settings tab of your repository

```base
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
DB_URL
DB_TEST_URL
DOCKERHUB_TOKEN
DOCKERHUB_USERNAME
EB_APP_NAME
EB_ENV_NAME
```
**2.** While configuring your environment for AWS Elastic Beanstalk, choose ***Docker*** as your platform and configure the following environment variables
```bash
DB_URL
```
**3.** Push the code to your repository and it will be deployed automatically
