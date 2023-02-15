export default [
    {
      context: [
          '/api/v1/auth',
          '/api/v1/user/',
          '/api/v1/auth/signIn',
          '/api/v1/auth/register',
          '/api/v1/user/any',
          '/api/v1/user/employee',
          '/api/v1/user/user',
          '/api/v1/user/admin',
          
      ],
      target: 'http://localhost:8080',
      secure: false
    }
  ];