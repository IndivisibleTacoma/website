using Orchard.ContentManagement;

namespace TheBootstrapMachine.Models {
    public class BootstrapSettingsPart : ContentPart {

        public string CustomHeaderContent {
            get { return this.Retrieve(x => x.CustomHeaderContent); }
            set { this.Store(x => x.CustomHeaderContent, value); }
        }

        public string CustomFooterContent {
            get { return this.Retrieve(x => x.CustomFooterContent); }
            set { this.Store(x => x.CustomFooterContent, value); }
        }

    }
}