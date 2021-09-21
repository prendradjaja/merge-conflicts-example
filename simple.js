import { AppleModule } from "apple-module";
import { BananaModule } from "banana-module";
import { DurianModule } from "durian-module";

@NgModule({
  imports: [
    AppleModule,
    BananaModule,
    CherryModule,
    DurianModule,
  ],
})
export class MyModule {}
