#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { TwitbotStack } from '../lib/twitbot-stack';

const app = new cdk.App();
new TwitbotStack(app, 'TwitbotStack');
app.run();
