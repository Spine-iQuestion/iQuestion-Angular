import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LocalUserService} from "../shared/services/localUser.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localUserService: LocalUserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localUserService.isLoggedIn) {
      if (route.data["roles"] && route.data["roles"].indexOf(this.localUserService.localUser.user?.role) === -1) {
        return this.router.createUrlTree(['/']);
      }

      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
