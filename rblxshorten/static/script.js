document.addEventListener('DOMContentLoaded', function() {
    var linkTypeSelect = document.getElementById('link_type');
    var assetIdInput = document.getElementById('asset_id');

    linkTypeSelect.addEventListener('change', function() {
        var selectedOption = linkTypeSelect.options[linkTypeSelect.selectedIndex].value;
        switch (selectedOption) {
            case 'games':
                assetIdInput.value = 'rblx.games/';
                break;
            case 'devforum':
                assetIdInput.value = 'devforum.link/';
                break;
            case 'library':
                assetIdInput.value = 'rblx.media/';
                break;
            case 'groups':
                assetIdInput.value = 'rblx.social/';
                break;
            case 'catalog':
                assetIdInput.value = 'rblx.clothing/';
                break;
            case 'profiles':
                assetIdInput.value = 'rblx.name/';
                break;
            default:
                assetIdInput.value = '';
        }
    });
});
