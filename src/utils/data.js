export const questions = [
    {
      id: 1,
      text: 'What type of meter is this?',
      options: [
        { id: 'smart', text: 'Smart Meter' },
        { id: 'traditional', text: 'Traditional Meter' },
      ],
    },
    {
      id: 2,
      text: 'Does corrosion present on the device?',
      options: [
        { id: 'yes', text: 'Yes' },
        { id: 'no', text: 'No' },
      ],
    },
    {
      id: 3,
      text: 'Severity of damage?',
      options: [
        { id: 'p1', text: 'P1' },
        { id: 'p2', text: 'P2' },
        { id: 'p3', text: 'P3' },
      ],
    },
  ]

  export const customerInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main Street, City, Country',
  }

  export const gasMeterInfo = {
    meterId: '123456',
    reading: 1000,
    lastUpdated: '2023-09-08 10:00 AM',
  }

  export const itemData = [
    {
      img: 'watson-inspection.github.io/1.jpg',
      title: 'Breakfast',
      id: 1,
    },
    {
      img: 'watson-inspection.github.io/2.jpg',
      title: 'Burger',
      id: 1,
    },
    {
      img: 'watson-inspection.github.io/3.jpg',
      title: 'Camera',
      id: 2,
    },
    {
      img: 'watson-inspection.github.io/4.jpg',
      title: 'Coffee',
      id: 2,
    },
    {
      img: 'watson-inspection.github.io/5.jpg',
      title: 'Hats',
      id: 3,
    },
    {
      img: 'watson-inspection.github.io/11.jpg',
      title: 'Honey',
      id: 4,
    },
    {
      img: 'watson-inspection.github.io/7.jpg',
      title: 'Basketball',
      id: 5,
    },
    {
      img: 'watson-inspection.github.io/12.jpg',
      title: 'Fern',
      id:5,
    },
    {
      img: 'watson-inspection.github.io/9.jpg',
      title: 'Mushrooms',
      id:5,
    },
    {
      img: 'watson-inspection.github.io/10.jpg',
      title: 'Tomato basil',
      id:5,
    },
    {
      img: 'watson-inspection.github.io/14.jpg',
      title: 'Basketball',
      id:5,
    },
    {
      img: 'watson-inspection.github.io/18.jpg',
      title: 'Fern',
      id:6,
    },
    {
      img: 'watson-inspection.github.io/16.jpg',
      title: 'Mushrooms',
      id:7,
    },
    {
      img: 'watson-inspection.github.io/17.jpg',
      title: 'Tomato basil',
      id:8,
    },
    {
      img: 'watson-inspection.github.io/19.jpg',
      title: 'Mushrooms',
      id:9,
    },
    {
      img: 'watson-inspection.github.io/20.jpg',
      title: 'Tomato basil',
      id:9,
    },
  ]

  export const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'connectionNumber',
      headerName: 'Connection Number',
      width: 150,
      editable: true,
    },
    {
      field: 'customerName',
      headerName: 'Customer name',
      width: 150,
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 150,
      editable: true,
    },
    {
      field: 'imageCount',
      headerName: 'Image Count',
      width: 150,
      editable: true,
    },
    {
      field: 'imageUploadDate',
      headerName: 'Image Upload Date',
      type: 'date',
      width: 150,
      editable: true,
    },
    {
      field: 'reviewStatus',
      headerName: 'Review Status',
      width: 150,
      editable: true,
    },
    {
      field: 'reviewedBy',
      headerName: 'Reviewed By',
      width: 150,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 260,
    },
  ]
  
  export const rows = [
    { id: 1, customerName: 'Jon', connectionNumber: 12345, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, imageUploadDate: new Date('01-01-2023') },
    { id: 2, customerName: 'Cersei', connectionNumber: 54321, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 3, customerName: 'Jaime', connectionNumber: 12123, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 4, customerName: 'Arya', connectionNumber: 38107, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 5, customerName: 'Daenerys', connectionNumber: 74013, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 6, customerName: null, connectionNumber: 96771, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 7, customerName: 'Ferrara', connectionNumber: 86108, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 8, customerName: 'Rossini', connectionNumber: 33664, phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
    { id: 9, customerName: 'Harvey', connectionNumber: 31840,phoneNumber: '911-110-7321', reviewStatus: 'New', imageCount: 3, },
  ]