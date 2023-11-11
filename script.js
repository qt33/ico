document.getElementById('convert-button').addEventListener('click', function() {
    var fileInput = document.getElementById('image-input');
    var sizeSelect = document.getElementById('size-select');
    var size = parseInt(sizeSelect.value);
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = size; // 根据所选大小设置 ICO 图片的宽度
            canvas.height = size; // 根据所选大小设置 ICO 图片的高度
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            var icoUrl = canvas.toDataURL('image/x-icon');
            document.getElementById('download-link').href = icoUrl;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});