export const cliCommands = [
  {
    cmd: 'keel new my-api',
    outputKeys: ['cli.out.project_created', 'cli.out.gomod', 'cli.out.env'],
    success: false,
  },
  {
    cmd: 'keel generate module users',
    outputKeys: ['cli.out.module_go', 'cli.out.controller_go', 'cli.out.service_go', 'cli.out.repository_go'],
    success: false,
  },
  {
    cmd: 'keel generate crud products',
    outputKeys: ['cli.out.crud_done', 'cli.out.dtos'],
    success: false,
  },
  {
    cmd: 'keel run',
    outputKeys: ['cli.out.server', 'cli.out.docs'],
    success: true,
  },
] as const;

export const cliFeatureKeys = [
  'cli.feature_1',
  'cli.feature_2',
  'cli.feature_3',
  'cli.feature_4',
] as const;
