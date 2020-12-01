const { fileUpload } = require("../../helpers/fileUpload");

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornal el URL', async () => {
        const res = await fetch("https://64.media.tumblr.com/b04788d5713cc06bd12d9a507f787712/tumblr_inline_ocomrj9Yn61tada81_540.jpg");
        const blob = await res.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string')

    });


    test('debe de retornar un error', async () => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);

        expect(url).toBe(null)

    });
});