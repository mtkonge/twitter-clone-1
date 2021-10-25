
# Twitter Clone 1 API V1

## Server Errors

In case of any server side error, the server will respond with a `500` or `5xx` HTTP code, and a data response:

```ts
{
    status: 'error',
    msg?: string,
}
```

## Auth

Authentication is done with either a header or a cookie containing a token recieved when logging in.

### Login

`POST /api/auth/login`

#### Request

```ts
{
    username: string,
    password: string,
}
```

#### Response Interface

```ts
{
    status: 'ok' | 'username/password incorrect' | 'incomplete',
    sessionId?: number,
    token?: string,
    userId?: number,
    username?: number,
}
```

#### Response **200**

```ts
{
    status: 'ok',
    sessionId: number,
    token: string,
    userId: number,
    username: number,
}
```

#### Response **400**

```ts
{
    status: 'incomplete' | 'username/password incorrect',
}
```

### Logout

`POST /auth/logout/:userId`

#### Response Interface

```ts
{
    status: 'ok' | 'incomplete',
}
```

#### Response **200**

```ts
{
    status: 'ok',
}
```

#### Response **400**

```ts
{
    status: 'incomplete',
}
```

### Register

`POST /auth/register`

#### Request

```ts
{
    email: string,
    username: string,
    password: string,
}
```

#### Response Interface

```ts
{
    status: 'ok' | 'incomplete' | 'username taken' | 'email invalid',
    userId?: number,
    email?: string,
    username?: string,
}
```

#### Response **200**

```ts
{
    status: 'ok',
    userId: number,
    email: string,
    username: string,
}
```

#### Response **400**

```ts
{
    status: 'incomplete' | 'username taken' | 'email invalid',
}
```

