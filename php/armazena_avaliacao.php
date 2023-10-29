<?php

    if(isset($_POST['submit'])) {
        include_once('config.php');
    
        $nome = $_POST['nome'];
        $avaliacao = $_POST['comentario'];
        $estrelas = $_POST['avaliacao'];
    
        // Obtenha a data e hora atual em formato DATETIME do MySQL
        $dataRegistro = date('d/m/Y');
    
        $query = "INSERT INTO avaliacoes (nome, avaliacao, estrelas, data_registro) VALUES ('$nome', '$avaliacao', '$estrelas', '$dataRegistro')";
    
        $result = mysqli_query($conexao, $query);
    }

    // Redirecionar para a página Index.php no diretório raiz
    header("Location: ../Index.php#avaliar");
    exit;


?>