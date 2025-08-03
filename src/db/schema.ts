import { date, decimal, int, mysqlEnum, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", {length: 255}).unique(),
  password: varchar("password", {length: 255}).notNull(),
  roleId: int("role_id").notNull().references(() => roles.id),
});

export const roles = mysqlTable('roles', {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", {length: 255}).notNull(),
});

export const permissions = mysqlTable('permissions', {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", {length: 255}).notNull(),
});

export const rolePermissions = mysqlTable('role_permissions', {
  id: int("id").autoincrement().primaryKey(),
  roleId: int("role_id").references(() => roles.id),
  permissionId: int("permission_id").references(() => permissions.id),
});


export const books = mysqlTable('books', {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", {length: 255}).notNull(),
  price: int("price").notNull(),
  country: varchar("country", {length: 255}),
  genre: varchar("genre", {length: 255}),
  language: varchar("language", {length: 255}),
  pages: int("pages"),
  description: text("description").default(''),
  year: int('year'),
  isbnCode: varchar("code", {length: 255}),
  link: varchar("link", {length: 255}),
  ageRating: mysqlEnum(["0+", "6+", "12+", "16+", "18+"]),
  userRating: decimal("user_rating"),
  ratingCount: int('rating_count').default(0),
});

export const orders = mysqlTable('orders', {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").references(() => users.id),
  address: varchar("address", {length: 255}),
  createdAt: date(),
  deliveredAt: date(),
});

export const orderItems = mysqlTable("order_items", {
  id: int("id").autoincrement().primaryKey(),
  orderId: int("order_id").references(() => orders.id),
  bookId: int("book_id").references(() => books.id),
  quantity: int("quantity"),
});


export const basket = mysqlTable('basket', {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").references(() => users.id),
});

export const basketItems = mysqlTable("basket_items", {
  id: int("id").autoincrement().primaryKey(),
  basketId: int("basket_id").references(() => basket.id),
  bookId: int("book_id").references(() => books.id),
  quantity: int("quantity"),
})
