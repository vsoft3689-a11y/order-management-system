// API Base URL
const API_BASE = '/api';

// Product API functions
class ProductAPI {
    static async getAllProducts() {
        const response = await fetch(`${API_BASE}/products`);
        return await response.json();
    }

    static async getProductById(id) {
        const response = await fetch(`${API_BASE}/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        return await response.json();
    }

    static async createProduct(productData) {
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('quantity', productData.quantity);
        if (productData.imageFile) {
            formData.append('imageFile', productData.imageFile);
        }

        const response = await fetch(`${API_BASE}/products`, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    }

    static async updateProduct(id, productData) {
        const response = await fetch(`${API_BASE}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        return await response.json();
    }

    static async deleteProduct(id) {
        const response = await fetch(`${API_BASE}/products/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}

// Order API functions
class OrderAPI {
    static async getAllOrders() {
        const response = await fetch(`${API_BASE}/orders`);
        return await response.json();
    }

    static async getUserOrders(userId) {
        const response = await fetch(`${API_BASE}/orders/user/${userId}`);
        return await response.json();
    }

    static async getOrderById(id) {
        const response = await fetch(`${API_BASE}/orders/${id}`);
        if (!response.ok) throw new Error('Order not found');
        return await response.json();
    }

    static async getOrderItems(orderId) {
        const response = await fetch(`${API_BASE}/orders/${orderId}/items`);
        return await response.json();
    }

    static async updateOrderStatus(id, status) {
        const response = await fetch(`${API_BASE}/orders/${id}/status?status=${status}`, {
            method: 'PUT'
        });
        return await response.json();
    }
}

// User API functions
class UserAPI {
    static async getAllUsers() {
        const response = await fetch(`${API_BASE}/users`);
        return await response.json();
    }

    static async getUserById(id) {
        const response = await fetch(`${API_BASE}/users/${id}`);
        if (!response.ok) throw new Error('User not found');
        return await response.json();
    }

    static async registerUser(userData) {
        const response = await fetch(`${API_BASE}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    }

    static async deleteUser(id) {
        const response = await fetch(`${API_BASE}/users/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}

// Utility functions
class Utils {
    static formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    static formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    static showAlert(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.body.prepend(alertDiv);
        
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    static async handleApiCall(apiCall, successMessage = null) {
        try {
            const result = await apiCall();
            if (successMessage) {
                this.showAlert(successMessage, 'success');
            }
            return result;
        } catch (error) {
            this.showAlert(error.message, 'danger');
            throw error;
        }
    }
}