# Tour Management System (TMS)

This is tour Management System Server which has created additional endpoints. This server basically used for Tour Management Applicaiton.

## API Reference

#### Base URL

```
 https://tour-management-server-gd8n.onrender.com
```

#### Get all Tours

```
 Endpoint - GET /api/tours
```

| Allow Query   | Type     | Description                                           |
| :------------ | :------- | :---------------------------------------------------- |
| `fields`      | `string` | **Example**. `api/tours?fields=fieldname1,fieldname2` |
| `sort`        | `string` | **Example**. `api/tours?sort=fieldname1,fieldname2`   |
| `page, limit` | `string` | **Example**. `api/tours?page=number&limit=number`     |

#### Create Tour

```
  Endpoint - POST /api/tours
```

| Allow Query | Description |
| :-------- | | :------------------------- |
| `no query available` | **Note**. `Its validated by mongoose schema` |

#### Get Single Tour

```
  Endpoint - GET /api/tours/${id}
```

| params | Type     | Description                       |
| :----- | :------- | :-------------------------------- |
| `id`   | `string` | **Required**. Id of item to fetch |

#### Patch Tour

```
  Endpoint - PATCH /api/tour/${id}
```

| params | Type     | Description                        |
| :----- | :------- | :--------------------------------- |
| `id`   | `string` | **Required**. Id of item to update |

#### Get Top 3 Trending Tour

```
  Endpoint - PATCH /api/tour/trending
```

| Description                                                                |
| :------------------------------------------------------------------------- |
| **Note**. Get Top 3 trending tour which one peoples views more then others |

#### Get Top 3 Cheapest Tour

```
 Endpoint - PATCH /api/tour/cheapest
```

| Description                                                                    |
| :----------------------------------------------------------------------------- |
| **Note**. Get Top 3 cheapest tour which tour price most less then others price |

Thanks for reach out me on GitHub

## Live Demo

[Click Here](https://tour-management-server-gd8n.onrender.com/)
