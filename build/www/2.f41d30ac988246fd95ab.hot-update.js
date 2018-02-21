webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar Subject_1 = __webpack_require__(\"./node_modules/rxjs/_esm5/Subject.js\");\r\nvar account_service_1 = __webpack_require__(\"./src/main/webapp/app/shared/auth/account.service.ts\");\r\nvar Principal = /** @class */ (function () {\r\n    function Principal(account) {\r\n        this.account = account;\r\n        this.authenticated = false;\r\n        this.authenticationState = new Subject_1.Subject();\r\n    }\r\n    Principal.prototype.authenticate = function (identity) {\r\n        this.userIdentity = identity;\r\n        this.authenticated = identity !== null;\r\n        this.authenticationState.next(this.userIdentity);\r\n    };\r\n    Principal.prototype.hasAnyAuthority = function (authorities) {\r\n        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));\r\n    };\r\n    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {\r\n        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {\r\n            return false;\r\n        }\r\n        for (var i = 0; i < authorities.length; i++) {\r\n            if (this.userIdentity.authorities.includes(authorities[i])) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    };\r\n    Principal.prototype.hasAuthority = function (authority) {\r\n        if (!this.authenticated) {\r\n            return Promise.resolve(false);\r\n        }\r\n        return this.identity().then(function (id) {\r\n            return Promise.resolve(id.authorities && id.authorities.includes(authority));\r\n        }, function () {\r\n            return Promise.resolve(false);\r\n        });\r\n    };\r\n    Principal.prototype.identity = function (force) {\r\n        var _this = this;\r\n        if (force === true) {\r\n            this.userIdentity = undefined;\r\n        }\r\n        // check and see if we have retrieved the userIdentity data from the server.\r\n        // if we have, reuse it by immediately resolving\r\n        if (this.userIdentity) {\r\n            return Promise.resolve(this.userIdentity);\r\n        }\r\n        // retrieve the userIdentity data from the server, update the identity object, and then resolve.\r\n        return this.account.get().toPromise().then(function (response) {\r\n            var account = response.body;\r\n            if (account) {\r\n                _this.userIdentity = account;\r\n                _this.authenticated = true;\r\n            }\r\n            else {\r\n                _this.userIdentity = null;\r\n                _this.authenticated = false;\r\n            }\r\n            _this.authenticationState.next(_this.userIdentity);\r\n            return _this.userIdentity;\r\n        }).catch(function (err) {\r\n            _this.userIdentity = null;\r\n            _this.authenticated = false;\r\n            _this.authenticationState.next(_this.userIdentity);\r\n            return null;\r\n        });\r\n    };\r\n    Principal.prototype.isAuthenticated = function () {\r\n        return this.authenticated;\r\n    };\r\n    Principal.prototype.isIdentityResolved = function () {\r\n        return this.userIdentity !== undefined;\r\n    };\r\n    Principal.prototype.getAuthenticationState = function () {\r\n        return this.authenticationState.asObservable();\r\n    };\r\n    Principal.prototype.getImageUrl = function () {\r\n        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;\r\n    };\r\n    Principal = __decorate([\r\n        core_1.Injectable(),\r\n        __metadata(\"design:paramtypes\", [account_service_1.AccountService])\r\n    ], Principal);\r\n    return Principal;\r\n}());\r\nexports.Principal = Principal;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzPzZhZmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4RUFBMkM7QUFFM0MsNEVBQXVDO0FBQ3ZDLG9HQUFtRDtBQUduRDtJQUtJLG1CQUNZLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSjNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLElBQUksaUJBQU8sRUFBTyxDQUFDO0lBSTlDLENBQUM7SUFFSixnQ0FBWSxHQUFaLFVBQWEsUUFBUTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsS0FBSyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsV0FBcUI7UUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHlDQUFxQixHQUFyQixVQUFzQixXQUFxQjtRQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsU0FBaUI7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUU7WUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsS0FBZTtRQUF4QixpQkE2QkM7UUE1QkcsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztRQUVELDRFQUE0RTtRQUM1RSxnREFBZ0Q7UUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxnR0FBZ0c7UUFDaEcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNoRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDL0IsQ0FBQztZQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQWtCLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFRCwwQ0FBc0IsR0FBdEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pFLENBQUM7SUExRlEsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQU9ZLGdDQUFjO09BTjFCLFNBQVMsQ0EyRnJCO0lBQUQsZ0JBQUM7Q0FBQTtBQTNGWSw4QkFBUyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwge1xuICAgIHByaXZhdGUgdXNlcklkZW50aXR5OiBhbnk7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblN0YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBhdXRoZW50aWNhdGUoaWRlbnRpdHkpIHtcbiAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gaWRlbnRpdHkgIT09IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KHRoaXMudXNlcklkZW50aXR5KTtcbiAgICB9XG5cbiAgICBoYXNBbnlBdXRob3JpdHkoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5oYXNBbnlBdXRob3JpdHlEaXJlY3QoYXV0aG9yaXRpZXMpKTtcbiAgICB9XG5cbiAgICBoYXNBbnlBdXRob3JpdHlEaXJlY3QoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkIHx8ICF0aGlzLnVzZXJJZGVudGl0eSB8fCAhdGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0aG9yaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eS5hdXRob3JpdGllcy5pbmNsdWRlcyhhdXRob3JpdGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYXNBdXRob3JpdHkoYXV0aG9yaXR5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pZGVudGl0eSgpLnRoZW4oKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGlkLmF1dGhvcml0aWVzICYmIGlkLmF1dGhvcml0aWVzLmluY2x1ZGVzKGF1dGhvcml0eSkpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGFuZCBzZWUgaWYgd2UgaGF2ZSByZXRyaWV2ZWQgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXG4gICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgdXNlcklkZW50aXR5IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB1cGRhdGUgdGhlIGlkZW50aXR5IG9iamVjdCwgYW5kIHRoZW4gcmVzb2x2ZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5nZXQoKS50b1Byb21pc2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gYWNjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICBpc0lkZW50aXR5UmVzb2x2ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJJZGVudGl0eSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVVybCgpOiBTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aXR5UmVzb2x2ZWQoKSA/IHRoaXMudXNlcklkZW50aXR5LmltYWdlVXJsIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/shared/auth/principal.service.ts\n");

/***/ })

})