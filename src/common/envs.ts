import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) throw new Error(error.message);

const envsVars: EnvVars = value;

export const envs = {
  port: envsVars.PORT,
  productMicroserviceHost: envsVars.PRODUCTS_MICROSERVICE_HOST,
  productMicroservicePort: envsVars.PRODUCTS_MICROSERVICE_PORT,
};
