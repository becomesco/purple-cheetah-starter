import {
  createController,
  createControllerMethod,
} from '@becomes/purple-cheetah';

export const HelloController = createController({
  name: 'Hello controller',
  path: '/hello',
  methods() {
    return {
      world: createControllerMethod<void, { message: string }>({
        path: '/world',
        type: 'get',
        async handler() {
          return {
            message: 'Hello World!',
          };
        },
      }),
      name: createControllerMethod<{ name: string }, { message: string }>({
        path: '/:name',
        type: 'get',
        async preRequestHandler({ request }) {
          return {
            name:
              request.params.name.substring(0, 1).toUpperCase() +
              request.params.name.substring(1),
          };
        },
        async handler({ name }) {
          return {
            message: `Hello ${name}`,
          };
        },
      }),
    };
  },
});
