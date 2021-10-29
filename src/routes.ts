import { createRoomController } from '@modules/createRoom';
import { createSessionController } from '@modules/createSession';
import { createUserController } from '@modules/createUser';
import { listRoomController } from '@modules/listRoom';
import { updateRoomController } from '@modules/updateRoom';
import { updateUserController } from '@modules/updateUser';
import { celebrate, errors, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from './middlewares/auth';

const routes = Router();

routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  (req, res) => {
    createUserController.handle(req, res);
  },
);

routes.post(
  '/session',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  (req, res) => {
    createSessionController.handle(req, res);
  },
);

routes.use(ensureAuthenticated);

routes.put(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      bio: Joi.string().allow(''),
      name: Joi.string().optional(),
      avatar: Joi.link().allow(''),
    }),
  }),
  (req, res) => {
    updateUserController.handle(req, res);
  },
);

routes.post(
  '/rooms',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().optional(),
    }),
  }),
  (req, res) => {
    createRoomController.handle(req, res);
  },
);

routes.get('/rooms', (req, res) => {
  listRoomController.handle(req, res);
});

routes.put(
  '/rooms',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().allow(''),
      description: Joi.string().allow(''),
    }),
    [Segments.HEADERS]: Joi.object()
      .keys({
        roomid: Joi.string().required(),
      })
      .unknown(),
  }),
  (req, res) => {
    updateRoomController.handle(req, res);
  },
);

routes.use(errors());

export { routes };
