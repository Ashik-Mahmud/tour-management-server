# Tour Management System (TMS)

This is tour Management System Server which has created additional endpoints. This server basically used for Tour Management Applicaiton.

## API Reference

#### Base URL

```
 https://tour-management-server-gd8n.onrender.com
```

#### Get all Tours

```
  GET /api/tours
```

| Allow Query   | Type     | Description                                           |
| :------------ | :------- | :---------------------------------------------------- |
| `fields`      | `string` | **Example**. `api/tours?fields=fieldname1,fieldname2` |
| `sort`        | `string` | **Example**. `api/tours?sort=fieldname1,fieldname2`   |
| `page, limit` | `string` | **Example**. `api/tours?page=number&limit=number`     |

#### Create Tour

```
  POST /api/tours
```

| Allow Query          | Description                                  |
| :------------------- | :------------------------------------------- |
| `no query available` | **Note**. `Its validated by mongoose schema` |

#### Informations for POST endpoints

```json
{
  "name": "Kuakata cebla sorif with 2 days",
  "duration": 2,
  "maxGroupSize": 2,
  "difficulty": "easy",
  "ratingsAverage": 4.3,
  "ratingsQuantity": 140,
  "price": 4000,
  "priceDiscount": 0,
  "description": "The native people of Sajek valley are ethnic minorities. Among them Chakma, Marma, Tripura, Pankho, Kaibarta, Lushai, other indigenous Assamese communities, and Sagma are mentionable. Women seem to be more involved in economic activities here.[citation needed] Tea stalls, food joints and roadside marketplaces are dominated by women.[citation needed] Picking fruits and vegetables early in the morning is a common trade here.[citation needed] They are not fluent in Bengali but the young population speak some English.[5]",
  "image": "https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg",
  "views": 1
}
```

#### Get Single Tour

```
  GET /api/tours/${id}
```

| params | Type     | Description                       |
| :----- | :------- | :-------------------------------- |
| `id`   | `string` | **Required**. Id of item to fetch |

#### Patch Tour

```
  PATCH /api/tour/${id}
```

| params | Type     | Description                        |
| :----- | :------- | :--------------------------------- |
| `id`   | `string` | **Required**. Id of item to update |

#### Get Top 3 Trending Tour

```
  PATCH /api/tour/trending
```

| Description                                                                |
| :------------------------------------------------------------------------- |
| **Note**. Get Top 3 trending tour which one peoples views more then others |

#### Get Top 3 Cheapest Tour

```
  PATCH /api/tour/cheapest
```

| Description                                                                    |
| :----------------------------------------------------------------------------- |
| **Note**. Get Top 3 cheapest tour which tour price most less then others price |

Thanks for reach out me on GitHub

## Live Demo

[Click Here](https://tour-management-server-gd8n.onrender.com/)
