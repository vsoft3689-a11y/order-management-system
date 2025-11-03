// Authentication and Role Management
class AuthManager {
    static isLoggedIn() {
        return localStorage.getItem('user') !== null;
    }

    static getUser() {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    }

    static getUserId() {
        const user = this.getUser();
        return user ? user.userId : null;
    }

    static getUserRole() {
        const user = this.getUser();
        return user ? user.role : null;
    }

    static isAdmin() {
        return this.getUserRole() === 'ADMIN';
    }

    static isCustomer() {
        return this.getUserRole() === 'CUSTOMER';
    }

    static setUser(userData) {
        localStorage.setItem('user', JSON.stringify(userData));
    }

    static logout() {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    static checkAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = '/login';
            return false;
        }
        return true;
    }

    static checkRole(allowedRoles) {
        if (!this.checkAuth()) return false;
        
        const userRole = this.getUserRole();
        if (!allowedRoles.includes(userRole)) {
            window.location.href = '/unauthorized';
            return false;
        }
        return true;
    }
}

// Login functionality
class LoginManager {
    static async login(email, password) {
        try {
            // In a real application, you would call your backend API
            // For now, we'll simulate the login process
            const users = [
                { userId: 1, name: 'Admin User', email: 'admin@oms.com', password: 'admin123', role: 'ADMIN' },
                { userId: 2, name: 'John Customer', email: 'customer@oms.com', password: 'customer123', role: 'CUSTOMER' }
            ];

            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                AuthManager.setUser(user);
                return { success: true, user };
            } else {
                return { success: false, message: 'Invalid email or password' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Login failed. Please try again.' };
        }
    }

    static async handleLoginForm(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const result = await this.login(email, password);
        
        if (result.success) {
            // Redirect based on role
            if (result.user.role === 'ADMIN') {
                window.location.href = '/admin/dashboard-api.html';
            } else {
                window.location.href = '/customer/dashboard-api.html';
            }
        } else {
            this.showLoginError(result.message);
        }
    }

    static showLoginError(message) {
        // Remove existing error alerts
        const existingAlert = document.querySelector('.alert-danger');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create new error alert
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger alert-dismissible fade show';
        errorDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Insert after the h2 title
        const title = document.querySelector('h2');
        title.parentNode.insertBefore(errorDiv, title.nextSibling);
    }
}

// Initialize login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', LoginManager.handleLoginForm);
    }

    // Auto-fill demo accounts for testing
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('demo') === 'admin') {
        document.getElementById('email').value = 'admin@oms.com';
        document.getElementById('password').value = 'admin123';
    } else if (urlParams.get('demo') === 'customer') {
        document.getElementById('email').value = 'customer@oms.com';
        document.getElementById('password').value = 'customer123';
    }
});