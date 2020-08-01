'use strict'

const Route = use('Route')

// Add User
Route.post('users', 'UserController.store').validator('User')

// Login
Route.post('sessions', 'SessionController.store').validator('Session')

// Forgot Password
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)

// Reset Password
Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

// Show File
Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  // Add File
  Route.post('/files', 'FileController.store')

  // CRUD Project
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))

  // CRUD Task
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]))
}).middleware(['auth'])
