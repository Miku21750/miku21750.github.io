const rentalDialog = document.getElementById('rental-dialog');
rentalDialog.innerHTML = `
<div class="modal fade" id="sewa" tabindex="-1" role="dialog" aria-labelledby="pricing" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header bg-light">
                <h4 id="pricing" class="w-100 text-center mb-0">Sewa Bot</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body"><form id="rental" class="card card-body">
                <div class="form-row">
                    <div class="form-group col-sm-6"><label for="name">Your Name</label>
                        <input id="name" name="name" class="form-control" placeholder="Your Name"></div>
                    <div class="form-group col-sm-6"><label for="email">Your Email</label>
                        <input id="email" name="email" type="email" class="form-control" placeholder="Your Email"></div>
                </div>
                <label for="product">Pilih Produk*</label>
                <select id="product" name="product" class="form-control mb-3" required>
                    <option>Rp. 10.000 ( Sewa Only )</option>
                    <option>Rp. 15.000 ( Sewa + Premium )</option>
                    <option>Rp. 5.000 ( Premium Only )</option>
                    <option>Custom Price</option>
                </select>
                <label for="description">Ada Catatan ?</label>
                <textarea id="description" name="description" class="form-control mb-3" rows="3"></textarea>
                <div><button class="btn btn-success" type="submit">Pesan via WhatsApp</button></div>
            </form></div>
        </div>
    </div>
</div>`;

$('#sewa').on('show.bs.modal', function (event) {
    const plan = event.relatedTarget && event.relatedTarget.dataset.plan;
    if (plan) document.getElementById('product').value = plan;
});

document.getElementById('rental').addEventListener('submit', function (event) {
    event.preventDefault();
    const fields = new FormData(this);
    const message = `Permisi, Mau beli ${fields.get('product')}\nNama : ${fields.get('name')}\nEmail : ${fields.get('email')}\n\nDesk : ${fields.get('description')}`;
    window.location.assign('https://wa.me/6283834685279?text=' + encodeURIComponent(message));
});
