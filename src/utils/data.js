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
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
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