// //tuples fixed length and types, strict type order too
// //don't prevent you from pushing on/popping off extra elements, big limitation

// const color: [number, number, number] = [255, 0, 255];

// type HTTPResponse = [number, string];

// const goodRes: HTTPResponse = [200, "OK"];
// // goodRes[0] = 'string';
// // goodRes.push(123);
// // goodRes.pop();

// const responses: HTTPResponse[] = [
//   [404, "not found"],
//   [200, "ok"],
// ];

// // ENUMS
// // allows us to define a set of named constants (string or numeric values)

// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   RETURNED,
//   DELIVERED,
// }

// const myStatus = OrderStatus.DELIVERED;

// const isDelivered = (status: OrderStatus) => {
//   return status === OrderStatus.DELIVERED;
// };

// isDelivered(OrderStatus.RETURNED);

// enum ArrowKeys {
//   UP = "up",
//   DOWN = "down",
//   LEFT = "left",
//   RIGHT = "right",
// }
