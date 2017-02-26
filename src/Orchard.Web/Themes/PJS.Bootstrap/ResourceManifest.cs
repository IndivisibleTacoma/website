using Orchard.UI.Resources;

namespace PJS.Bootstrap {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest.DefineScript("Bootstrap").SetUrl("bootstrap-3.3.2/js/bootstrap.min.js", "bootstrap-3.3.2/js/bootstrap.js").SetVersion("3.3.2").SetDependencies("jQuery");
            manifest.DefineScript("HoverDropdown").SetUrl("hover-dropdown.js").SetDependencies("Bootstrap");
            manifest.DefineScript("Custom").SetUrl("custom.js").SetDependencies("jQuery");
        }
    }
}
