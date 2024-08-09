<?php
include 'header.php';
?>
<div class="addForm">
    <div class="form">
        <h2 class="page-title">Añadir Elemento<h2>
            <form>
                <select>
                    <option>Materias</option>
                    <option>Bobinas</option>
                    <option>Productos</option>
                </select>
                <div class="inLine">
                    <h2>T-ONE</h2>
                    <input type="checkbox">
                </div>
                <input placeholder="Nombre de producto" type="text">
                <input placeholder="Codigo" type="text">
                <input placeholder="Imagen" type="file">
                <button>REGISTRAR</button>


            </form>
    </div>
</div>
<?php
include 'footer.php';
?>