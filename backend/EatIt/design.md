
# Architecture Design
    Nodejs Server
    MVC
    RESTful
## 1. Collections
- Foods
    - name
    - description
    - ingredients: [
        - quantity
        - name
    ]
    - steps: [String]
    - timers: [Number] (minute)
    - imageURL
    - originalURL
    - active
- Ingredients
    - name
    - active
## 2. Controller
    CRUD
    - create
    - read - get items with active == true
    - update
    - delete // setActive to false           
## 3. Route / RESTful
- API:
    - URI: /api/foods/
        - POST -> /api/foods/ => create new
        - GET -> /api/foods/:foodId => read a food
        - GET -> /api/foods/ 
            - người dùng truyền về qua res.body 1 array các nguyên liệu(ingredients)
            - trong route này sẽ sửa dụng controller getAllFoods mà cooked data như dưới
            - trong hàm route sẽ xử lí dữ liệu: so sánh array người dùng nhập vào với list nguyên liệu của từng món trong list get bởi getAllFoods
            - trả về người dùng 1 array các món đã lọc
        - PUT -> /api/foods/:foodId => update a food
    - URI: /api/ingredients/ 
        - POST -> /api/ingredients/ => create a ingredient
        - GET -> /api/ingredients/ => read all
        - GET -> /api/ingredients/:ingId => read one
        - PUT -> /api/ingredients/:ingId => update one
## 4. Cooked Data
- URI: /api/foods/
    - POST -> /api/foods/
        - res.status // HTTP request status
        - foodId
    - GET -> /api/foods/
        - _id
        - name
        - description 
        - ingredients
    - PUT -> /api/foods/:foodId
        - res.status
        - foodId
- URI: /api/ingredients/ 
    - POST -> /api/ingredients/ 
        - res.status
        - ingId
    - GET -> /api/ingredients/ 
        - _id
        - name
    - GET -> /api/ingredients/:ingId
        - _id
        - name
    - PUT -> /api/ingredients/:ingId 
        - res.status
        - ingId
    - DELETE -> /api/ingredients/:ingId 
        - res.status
        - ingId