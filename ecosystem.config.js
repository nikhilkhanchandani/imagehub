module.exports = {
  apps: [
    {
      name: 'imagehub',
      script: './index.js',
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        PORT: 4000,
        NODE_ENV: 'development',
      },
      env_stage: {
        PORT: 4000,
        NODE_ENV: 'stage',
      },
      env_production: {
        PORT: 4000,
        NODE_ENV: 'production',
      },
    },
  ],
};
/*
  pm2 stop imagehub
  pm2 start ecosystem.config.js --env production
  
  
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope MachinePolicy
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope UserPolicy
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
  Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope LocalMachine
  
  
    go to RDP
    
    1. pm2 stop imagehub
    
    then do
    
    2. git pull
    
    and then run any of the following command.
    
    3. pm2 start ecosystem.config.js --env stage
       pm2 start ecosystem.config.js --env production
    
    pm2 restart imagehub
    pm2 reload imagehub
    
    pm2 delete imagehub
    
    pm2 monit
    */
