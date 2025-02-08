export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First Name",
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "zipCode",
      type: "string",
      title: "Zip Code",
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "cartItems",
      type: "array",
      title: "Cart Items",
      of: [
        {
          type: "reference",
          to: {
            type: "food",
          },
        },
      ],
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
    },
    {
        name: "total",
        type: "number",
        title: "Total",
    },
    {
      name: "orderDate",
      type: "string",
      title: "Order Date",
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
          list: [
              { title: 'Pending', value: 'pending' },
              { title: 'Success', value: 'success' },
              { title: 'Dispatch', value: 'dispatch' },
          ],
          layout: 'radio', // Placed correctly inside options
      },
      initialValue: 'pending',  // Default value
  }
  ],
};
