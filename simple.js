import { AppleModule } from "apple-module";
import { BananaModule } from "banana-module";

@NgModule({
  imports: [
    AppleModule,
    BananaModule,
    CherryModule,
  ],
})
export class MyModule {}
