import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
/**
 * Created by eng210 on 06.10.2016.
 */
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);