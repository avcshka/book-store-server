import { relations } from "drizzle-orm";
import { basket, basketItems, books, orderItems, orders, permissions, rolePermissions, roles, users } from "./schema";

export const userRelations = relations(users, ({ one, many }) => ({
  role: one(roles, {
    fields: [users.roleId],
    references: [roles.id]
  }),
  basket: one(basket, {
    fields: [users.id],
    references: [basket.userId],
  }),
  order: many(orders)
}));

export const roleRelations = relations(roles, ({ many }) => ({
  users: many(users),
  rolePermissions: many(rolePermissions),
}));

export const permissionRelations = relations(permissions, ({ many }) => ({
  rolePermissions: many(rolePermissions),
}));

export const rolePermissionRelations = relations(rolePermissions, ({ one }) => ({
  role: one(roles, {
    fields: [rolePermissions.roleId],
    references: [roles.id],
  }),
  permission: one(permissions, {
    fields: [rolePermissions.permissionId],
    references: [permissions.id]
  })
}));


export const orderRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  orderItems: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({one}) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id]
  }),
  book: one(books, {
    fields: [orderItems.bookId],
    references: [books.id]
  })
}))

export const basketRelations = relations(basket, ({ many }) => ({
  basketItems: many(basketItems),
}));

export const basketItemsRelations = relations(basketItems, ({one}) => ({
  basket: one(basket, {
    fields: [basketItems.basketId],
    references: [basket.id]
  }),
  book: one(books, {
    fields: [basketItems.bookId],
    references: [books.id]
  }),
}));

export const bookRelations = relations(books, ({many}) => ({
  orderItems: many(orderItems),
  basketItems: many(basketItems),
}));