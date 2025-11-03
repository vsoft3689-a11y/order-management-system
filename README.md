# Order Management System (OMS) - Customer Portal

## 📋 Project Overview

A comprehensive Order Management System designed for customers to browse products, place orders, track shipments, and manage their profiles. Built with modern web technologies including HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 🚀 Features

### 🔐 Authentication & Security
- User login/logout functionality
- Session management with localStorage
- Protected routes with authentication checks
- Secure password management

### 🛍️ Product Management
- **Product Catalog**: Browse available products with images
- **Search & Filter**: Search by name, description, or category
- **Category Filtering**: Filter products by Electronics, Clothing, Books, Home, Sports
- **Stock Management**: Real-time stock quantity display
- **Image Zoom**: Click product images to view full-size versions
- **Responsive Grid**: Mobile-friendly product display

### 📦 Order System
- **Order Placement**: Easy order creation with quantity selection
- **Shipping Address**: Multiple address management
- **Order Tracking**: Real-time order status tracking
- **Order History**: Complete order history with status
- **Order Cancellation**: Cancel pending orders
- **Order Details**: Detailed order information and items

### 👤 Customer Profile
- **Personal Information**: Update name, email, phone, bio
- **Address Management**: Add, edit, and delete shipping addresses
- **Security Settings**: Password change functionality
- **Order Statistics**: Total orders, delivered, pending counts
- **Membership Duration**: Account age tracking

### 📊 Dashboard & Analytics
- **Order Statistics**: Visual cards showing order counts by status
- **Quick Actions**: Easy navigation to key features
- **Real-time Updates**: Live order status updates

## 🛠️ Installation & Setup

### ⚡ Quick Start (5 Minutes Setup)

#### Method 1: Direct Browser Execution (Easiest)
1. **Create Project Folder**
   ```bash
   mkdir oms-customer-portal
   cd oms-customer-portal
   ```

2. **Save the HTML File**
   - Copy the complete HTML code provided
   - Save it as `index.html` in your project folder

3. **Run the Application**
   - Double-click `index.html` to open in your browser
   - OR Right-click → Open With → Your Browser

4. **Login with Default Credentials**
   ```
   Email: customer@example.com
   Password: password123
   ```

#### Method 2: Using Local Server (Recommended)
1. **Using Python**
   ```bash
   # Navigate to project folder
   cd oms-customer-portal
   
   # Start local server (Python 3)
   python -m http.server 8000
   
   # Access application
   # Open browser and go to: http://localhost:8000
   ```

2. **Using Node.js**
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run in project directory
   http-server -p 8080
   
   # Access application
   # Visit: http://localhost:8080
   ```

3. **Using PHP**
   ```bash
   # Start PHP built-in server
   php -S localhost:8000
   
   # Access application
   # Visit: http://localhost:8000
   ```

### 📋 Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)
- Optional: Python/Node.js/PHP for local server

## 🎯 Step-by-Step Execution Guide

### Step 1: Project Setup
1. Create a new folder on your computer
2. Save the provided HTML code as `index.html`
3. Ensure you have a stable internet connection

### Step 2: Launch Application
1. **Option A**: Direct file opening
   - Locate `index.html` file
   - Double-click to open in default browser

2. **Option B**: Local server (better experience)
   - Open terminal/command prompt
   - Navigate to project folder
   - Run one of the server commands above
   - Open the provided localhost URL

### Step 3: First Time Setup
1. **Initial Login**
   - Use default credentials: `customer@example.com` / `password123`
   - Or register a new account

2. **Sample Data**
   - Application auto-loads with sample products and orders
   - No additional setup required

### Step 4: Explore Features
1. **Dashboard**: View order statistics and quick actions
2. **Products**: Browse and search products
3. **Orders**: Place new orders and track existing ones
4. **Profile**: Manage personal information and settings

## 🔧 Configuration

### Default Accounts
```javascript
// Pre-configured user accounts
const defaultUsers = [
    {
        email: "customer@example.com",
        password: "password123",
        name: "John Customer",
        phone: "+1-555-0123"
    }
];
```

### Sample Data Included
- 15+ sample products across 5 categories
- Pre-configured order history
- Sample shipping addresses
- Demo user profiles

## 🎨 User Guide

### 📊 Dashboard
- View order statistics at a glance
- Quick access to all main features
- Real-time order status updates

### 🛍️ Products Section
1. **Browse Products**: Scroll through product catalog
2. **Search**: Use search bar to find specific items
3. **Filter**: Filter by category using sidebar
4. **Order**: Click "Order Now" to place orders
5. **Zoom**: Click product images for larger view

### 📦 Orders Management
1. **Place Order**: 
   - Select products and quantities
   - Choose shipping address
   - Confirm order details

2. **Track Orders**:
   - View order status (Pending → Shipped → Delivered)
   - Cancel pending orders
   - View order history

### 👤 Profile Management
1. **Personal Info**: Update name, email, phone, bio
2. **Addresses**: Add/edit multiple shipping addresses
3. **Security**: Change password
4. **Preferences**: Manage account settings

## 🐛 Troubleshooting

### Common Issues & Solutions

1. **Page Not Loading Properly**
   ```
   Issue: Blank page or styling issues
   Solution: 
   - Check internet connection
   - Ensure all CDN links are accessible
   - Clear browser cache (Ctrl+F5)
   ```

2. **Data Not Saving**
   ```
   Issue: Changes not persisting
   Solution:
   - Check if localStorage is enabled
   - Try different browser
   - Clear browser storage and retry
   ```

3. **Features Not Working**
   ```
   Issue: Buttons/forms not responding
   Solution:
   - Open browser console (F12) for errors
   - Ensure JavaScript is enabled
   - Check for ad-blockers interfering
   ```

4. **Images Not Displaying**
   ```
   Issue: Broken product images
   Solution:
   - Check internet connection
   - Images are loaded from external CDN
   - Refresh page
   ```

### Debug Mode
Enable detailed logging in browser console:
```javascript
localStorage.setItem('debug', 'true');
console.log('OMS Debug Mode Enabled');
```

### Data Reset
To completely reset application data:
```javascript
// Run in browser console
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## 🔒 Security Features

- Client-side authentication
- Session management
- Input validation
- Secure logout
- Data persistence in localStorage

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|---------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Browsers | Latest | ✅ Responsive Design |

## 🚀 Performance Tips

1. **For Better Performance**:
   - Use local server method instead of direct file opening
   - Ensure stable internet connection for CDN resources
   - Close unnecessary browser tabs

2. **Offline Usage**:
   - Basic functionality works offline after initial load
   - Data persists in localStorage
   - Some features require internet for CDN resources

## 📊 Testing Checklist

### ✅ Core Functionality Tests
- [ ] User login/logout
- [ ] Product browsing and search
- [ ] Order placement process
- [ ] Order tracking and cancellation
- [ ] Profile management
- [ ] Address management
- [ ] Password change

### ✅ User Experience Tests
- [ ] Responsive design on mobile
- [ ] Loading states and animations
- [ ] Error handling and messages
- [ ] Form validation
- [ ] Navigation flow

### ✅ Data Persistence Tests
- [ ] Data saves correctly
- [ ] Session persistence
- [ ] Order history maintained
- [ ] Profile updates saved

## 🔄 Maintenance

### Regular Tasks
- Clear browser cache periodically
- Backup important data if needed
- Update browser for security

### Data Backup
Export data from browser console:
```javascript
// Export all data
console.log(JSON.stringify(localStorage, null, 2));
```

## 🆘 Support & Help

### Immediate Issues
1. **Check Console**: Press F12 → Console tab for errors
2. **Refresh**: Hard refresh with Ctrl+F5
3. **Browser**: Try different web browser
4. **Connection**: Verify internet connectivity

### Common Solutions
- **Login issues**: Use default credentials or register new account
- **Data loss**: Data auto-resets if localStorage is cleared
- **Slow performance**: Use local server method for better performance

## 📈 Future Enhancements

### Planned Features
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Export functionality
- [ ] Advanced reporting

### Technical Improvements
- [ ] Backend API integration
- [ ] Database persistence
- [ ] Enhanced security
- [ ] Real-time updates
- [ ] Offline synchronization

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit pull request

### Development Setup
```bash
# Clone repository
git clone [repository-url]

# Navigate to project
cd oms-customer-portal

# Start development server
python -m http.server 8000
```

## 📄 License

This project is licensed under the MIT License - feel free to use, modify, and distribute as needed.

## 🎉 Success Checklist

After setup, verify everything works:

- [ ] Application loads without errors
- [ ] Can login with default credentials
- [ ] Products display correctly
- [ ] Can place new orders
- [ ] Order tracking works
- [ ] Profile updates save
- [ ] Responsive on mobile devices
- [ ] Data persists between sessions

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Built With**: HTML5, CSS3, Bootstrap 5, JavaScript ES6+  
**Support**: Check browser console for debugging information


