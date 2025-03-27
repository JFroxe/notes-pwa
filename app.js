document.addEventListener('DOMContentLoaded', () => {
    loadCustomers();
    loadServices();
    loadOrders();
});

function openForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function saveCustomer() {
    const customerName = document.getElementById('customerName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const address = document.getElementById('address').value;
    const deviceDetails = document.getElementById('deviceDetails').value;

    const customer = {
        customerName,
        contactInfo,
        address,
        deviceDetails,
        registrationDate: new Date().toISOString().split('T')[0]
    };

    // Save to CSV
    saveToCSV('customers.csv', customer);

    // Close form
    closeForm('customerForm');

    // Reload customers
    loadCustomers();
}

function saveService() {
    const serviceType = document.getElementById('serviceType').value;
    const serviceDescription = document.getElementById('serviceDescription').value;
    const serviceCost = document.getElementById('serviceCost').value;

    const service = {
        serviceType,
        serviceDescription,
        serviceCost,
        serviceStatus: 'pending'
    };

    // Save to CSV
    saveToCSV('services.csv', service);

    // Close form
    closeForm('serviceForm');

    // Reload services
    loadServices();
}

function saveOrder() {
    const orderNumber = document.getElementById('orderNumber').value;
    const customerReference = document.getElementById('customerReference').value;
    const serviceList = document.getElementById('serviceList').value;
    const totalCost = document.getElementById('totalCost').value;

    const order = {
        orderNumber,
        customerReference,
        serviceList,
        totalCost,
        orderStatus: 'pending',
        orderDate: new Date().toISOString().split('T')[0]
    };

    // Save to CSV
    saveToCSV('orders.csv', order);

    // Close form
    closeForm('orderForm');

    // Reload orders
    loadOrders();
}

function loadCustomers() {
    // Load customers from CSV and display in table
}

function loadServices() {
    // Load services from CSV and display in table
}

function loadOrders() {
    // Load orders from CSV and display in table
}

function saveToCSV(filename, data) {
    // Use Papaparse to save data to CSV
}
