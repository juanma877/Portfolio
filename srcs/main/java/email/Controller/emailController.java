@RestController
public class emailController(){
    @autowired

    @PostMapping("/clientes/crear")
    public void crearCliente(@RequestBody Cliente cli) {
        clienServ.guardarCliente(cli);
    }
}