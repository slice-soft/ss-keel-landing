export const layers = [
  { key: 'module',     color: 'blue',   code: 'app.Use(&users.Module{})' },
  { key: 'controller', color: 'cyan',   code: 'core.POST("/users", c.Create)' },
  { key: 'service',    color: 'purple', code: 'func (s *UsersService) Create(dto CreateUserDTO)' },
  { key: 'repository', color: 'green',  code: 'type Repository[T any, ID any] interface' },
] as const;
