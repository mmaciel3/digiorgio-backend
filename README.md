# Deploying

1. Copy file `deploy.sh.sample` and rename it to `deploy.sh` through command `cp deploy.sh.sample deploy.sh`.
2. Grant execution permission to `deploy.sh`: `chmod +x deploy.sh`.
3. Update the content of `deploy.sh` with your AWS key and secret.
4. Run `./deploy.sh`.

# Email templates

AWS does not provide a way to do it through the console so far. The CLI is the only way to do it.
The latest version of email templates should be kept at the `templates` folder so that it's easier to modify them.

## Create a new template

`aws ses create-template --cli-input-json file://templates/BrandLead.json --region sa-east-1`

## List existing templates

`aws ses list-templates --region sa-east-1`

## Get template content

`aws ses get-template --template-name BrandLead --region sa-east-1`

## Update existing template

`aws ses update-template --cli-input-json file://templates/BrandLead.json --region sa-east-1`
