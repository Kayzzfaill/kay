export  class AuthController {
    constructor(private readonly repository: UsersRepository) {}


    publc routes(): Hono{
        retutn new Hono{
            .post(
                '/register',
                ApplicationValidator.validator('json', userRegisterSchema),
                this.register.bind(this),
            )
            .post(
                '.auth',
                ApplicationValidator.validate('json', userAuthSchema),
                this.auth.bind(this),
            )
            .get('/me', this.mme.bind(this));
        }

        public async register(
            c: Context<
            ApplicationEnviroment,
            '/register',
            {
                out: {
                    json: UserRegisterType;
                };
            }
        
        )

    }
}