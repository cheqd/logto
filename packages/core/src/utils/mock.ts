/* eslint-disable max-lines */
import {
  User,
  userInfoSelectFields,
  Application,
  ApplicationType,
  Resource,
  ResourceScope,
  Role,
  Setting,
  SignInExperience,
  BrandingStyle,
  Language,
  Connector,
  ConnectorMetadata,
  Passcode,
  PasscodeType,
  UserLog,
  UserLogType,
  UserLogResult,
  ConnectorType,
  SignInMethodState,
  Branding,
  SignInMethods,
} from '@logto/schemas';
import pick from 'lodash.pick';

export const mockUser: User = {
  id: 'foo',
  username: 'foo',
  primaryEmail: 'foo@logto.io',
  primaryPhone: '111111',
  roleNames: ['admin'],
  passwordEncrypted: null,
  passwordEncryptionMethod: null,
  passwordEncryptionSalt: null,
  name: null,
  avatar: null,
  identities: {
    connector1: { userId: 'connector1', details: {} },
  },
  customData: {},
};

export const mockUserResponse = pick(mockUser, ...userInfoSelectFields);

export const mockUserList: User[] = [
  {
    id: '1',
    username: 'foo1',
    primaryEmail: 'foo1@logto.io',
    primaryPhone: '111111',
    roleNames: ['admin'],
    passwordEncrypted: null,
    passwordEncryptionMethod: null,
    passwordEncryptionSalt: null,
    name: null,
    avatar: null,
    identities: {},
    customData: {},
  },
  {
    id: '2',
    username: 'foo2',
    primaryEmail: 'foo2@logto.io',
    primaryPhone: '111111',
    roleNames: ['admin'],
    passwordEncrypted: null,
    passwordEncryptionMethod: null,
    passwordEncryptionSalt: null,
    name: null,
    avatar: null,
    identities: {},
    customData: {},
  },
  {
    id: '3',
    username: 'foo3',
    primaryEmail: 'foo3@logto.io',
    primaryPhone: '111111',
    roleNames: ['admin'],
    passwordEncrypted: null,
    passwordEncryptionMethod: null,
    passwordEncryptionSalt: null,
    name: null,
    avatar: null,
    identities: {},
    customData: {},
  },
  {
    id: '4',
    username: 'bar1',
    primaryEmail: 'bar1@logto.io',
    primaryPhone: '111111',
    roleNames: ['admin'],
    passwordEncrypted: null,
    passwordEncryptionMethod: null,
    passwordEncryptionSalt: null,
    name: null,
    avatar: null,
    identities: {},
    customData: {},
  },
  {
    id: '5',
    username: 'bar2',
    primaryEmail: 'bar2@logto.io',
    primaryPhone: '111111',
    roleNames: ['admin'],
    passwordEncrypted: null,
    passwordEncryptionMethod: null,
    passwordEncryptionSalt: null,
    name: null,
    avatar: null,
    identities: {},
    customData: {},
  },
];

export const mockUserListResponse = mockUserList.map((user) => pick(user, ...userInfoSelectFields));

export const mockApplication: Application = {
  id: 'foo',
  name: 'foo',
  type: ApplicationType.SPA,
  description: null,
  oidcClientMetadata: {
    redirectUris: [],
    postLogoutRedirectUris: [],
  },
  customClientMetadata: {},
  createdAt: 1_645_334_775_356,
};

export const mockResource: Resource = {
  id: 'logto_api',
  name: 'management api',
  indicator: 'logto.dev/api',
  accessTokenTtl: 3600,
};

export const mockScope: ResourceScope = {
  id: 'foo',
  name: 'read:user',
  description: 'read:user',
  resourceId: 'logto_api',
};

export const mockRole: Role = {
  name: 'admin',
  description: 'admin',
};

export const mockSetting: Setting = {
  id: 'foo setting',
  customDomain: 'mock-logto.dev',
  adminConsole: {
    applicationSkipGetStarted: false,
  },
};

export const mockSignInExperience: SignInExperience = {
  id: 'foo',
  branding: {
    primaryColor: '#000',
    backgroundColor: '#fff',
    darkMode: true,
    darkBackgroundColor: '#000',
    darkPrimaryColor: '#fff',
    style: BrandingStyle.Logo,
    logoUrl: 'http://logto.png',
    slogan: 'logto',
  },
  termsOfUse: {
    enabled: false,
  },
  forgetPasswordEnabled: true,
  languageInfo: {
    autoDetect: true,
    fallbackLanguage: Language.english,
    fixedLanguage: Language.chinese,
  },
  signInMethods: {
    username: SignInMethodState.primary,
    email: SignInMethodState.disabled,
    sms: SignInMethodState.disabled,
    social: SignInMethodState.secondary,
  },
  socialSignInConnectorIds: ['github', 'facebook'],
};

export const mockConnectorList: Connector[] = [
  {
    id: 'connector_0',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_123,
  },
  {
    id: 'connector_1',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_234,
  },
  {
    id: 'connector_2',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_345,
  },
  {
    id: 'connector_3',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_456,
  },
  {
    id: 'connector_4',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_567,
  },
  {
    id: 'connector_5',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_567,
  },
  {
    id: 'connector_6',
    enabled: true,
    config: {},
    createdAt: 1_234_567_890_567,
  },
];

export const mockConnectorInstanceList: Array<{
  connector: Connector;
  metadata: ConnectorMetadata;
}> = [
  {
    connector: {
      id: 'connector_0',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_123,
    },
    metadata: {
      id: 'connector_0',
      type: ConnectorType.Social,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_1',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_234,
    },
    metadata: {
      id: 'connector_1',
      type: ConnectorType.SMS,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_2',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_345,
    },
    metadata: {
      id: 'connector_2',
      type: ConnectorType.Social,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_3',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_456,
    },
    metadata: {
      id: 'connector_3',
      type: ConnectorType.Social,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_4',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_567,
    },
    metadata: {
      id: 'connector_4',
      type: ConnectorType.Email,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_5',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_567,
    },
    metadata: {
      id: 'connector_5',
      type: ConnectorType.SMS,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
  {
    connector: {
      id: 'connector_6',
      enabled: true,
      config: {},
      createdAt: 1_234_567_890_567,
    },
    metadata: {
      id: 'connector_6',
      type: ConnectorType.Email,
      name: {},
      logo: './logo.png',
      description: {},
      readme: 'README.md',
    },
  },
];

export const mockPasscode: Passcode = {
  id: 'foo',
  interactionJti: 'jti',
  phone: '888 888 8888',
  email: 'foo@logto.io',
  type: PasscodeType.SignIn,
  code: 'asdfghjkl',
  consumed: false,
  tryCount: 2,
  createdAt: 10,
};

export const mockUserLog: UserLog = {
  id: 'foo',
  userId: 'foo',
  type: UserLogType.RegisterEmail,
  result: UserLogResult.Success,
  payload: {},
  createdAt: 10,
};

export const mockBranding: Branding = {
  primaryColor: '#000',
  backgroundColor: '#fff',
  darkMode: true,
  darkBackgroundColor: '#000',
  darkPrimaryColor: '#fff',
  style: BrandingStyle.Logo_Slogan,
  logoUrl: 'http://silverhand.png',
  slogan: 'Silverhand.',
};

export const mockSignInMethods: SignInMethods = {
  username: SignInMethodState.primary,
  email: SignInMethodState.disabled,
  sms: SignInMethodState.disabled,
  social: SignInMethodState.disabled,
};

export const mockAliyunDmConnectorInstance = {
  connector: {
    id: 'aliyun-dm',
    enabled: true,
    config: {},
    createdAt: 1_646_382_233_333,
  },
  metadata: {
    type: ConnectorType.Email,
  },
};

export const mockFacebookConnectorInstance = {
  connector: {
    id: 'facebook',
    enabled: true,
    config: {},
    createdAt: 1_646_382_233_333,
  },
  metadata: {
    type: ConnectorType.Social,
  },
};

export const mockGithubConnectorInstance = {
  connector: {
    id: 'github',
    enabled: true,
    config: {},
    createdAt: 1_646_382_233_000,
  },
  metadata: {
    type: ConnectorType.Social,
  },
};

export const mockGoogleConnectorInstance = {
  connector: {
    id: 'google',
    enabled: false,
    config: {},
    createdAt: 1_646_382_233_000,
  },
  metadata: {
    type: ConnectorType.Social,
  },
};
/* eslint-enable max-lines */
