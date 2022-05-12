<?php
// Muhammad Nafal Muttaqin XI-RPL 2
namespace Src;

class Validation{
    public static function validate($validate, $input){
        foreach ($validate as $keyV => $valueV) {
            $exploded1 = explode('|', $valueV);
            foreach ($exploded1 as $valueExplode) {
                if (strpos($valueExplode, ':')){
                    $exploded2 = explode(':',$valueExplode);
                    $function_name = $exploded2[0];
                    $result = self::$function_name($input[$keyV], $exploded2[1]);
                    if (!$result) {
                        return false;
                    }
                }else{
                    $result = self::$valueExplode($input[$keyV]);
                    if (!$result) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    //validasi harus ada
    private static function harus_ada($input){
        if(strlen($input) <= 0){
            return true;
        }else{
            return false;
        }
    }

    //validasi hanya boleh angka
    private static function hanya_angka($input){
        if(is_numeric($input)){
            return true;
        }else{
            return false;
        }
    }

    //validasi hanya boleh teks atau string
    private static function hanya_teks($input){
        if(preg_match("/[a-z A-Z]/", $input)){
            return true;
        }else{
            return false;
        }
    }

    //validasi max character
    private static function max($input, $max){
        if(strlen($input) <= $max){
            return true;
        }else{
            return false;
        }
    }

    //validasi max character
    private static function min($input, $min){
        if(strlen($input) >= $min){
            return true;
        }else{
            return false;
        }
    }
}   
?>