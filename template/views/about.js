import { Config } from "../../src/classes/Config.js";

const theme = new Config().get_theme();
let textColor = null;
theme == "light" ? textColor = "#00000090" : textColor = "#ffffff90";

export function aboutContainer() {
  let aboutContainer = `
      <div id="list-mobile">
        
      </div>
      `;

  $("#content").html(aboutContainer);
}

export function aboutView() {
  let about = `
        <div id="header" class="single" style="padding: 10% 5%; margin-bottom: 5%;">
            <h2 style="margin-bottom: 0;"><strong>Minhas Oportunidades</strong></h2>
            <h6><strong>v0.5 (beta)</strong></h6>
        </div>
        <div class="about" style="color: ${textColor};">
            <p>
                O Minhas Oportunidades é um aplicativo inovador que oferece a possibilidade de salvar e gerenciar vagas de emprego de diferentes plataformas, tudo em um só lugar. Com o GitHub Pages, nosso aplicativo está disponível online, permitindo um acesso fácil e rápido às suas oportunidades.
            </p>
            
            <p>
                Ao hospedar o Minhas Oportunidades no GitHub Pages, garantimos a confiabilidade e a estabilidade do serviço, bem como uma experiência de usuário perfeita. Você pode acessar o aplicativo de qualquer dispositivo com conexão à Internet, sem a necessidade de instalação adicional.
            </p>
            
            <p>
                Ao utilizar o GitHub Pages, temos a capacidade de compartilhar atualizações e melhorias constantes no aplicativo. Dessa forma, você sempre terá acesso às últimas funcionalidades e correções de bugs, proporcionando uma experiência aprimorada ao buscar e gerenciar suas oportunidades de emprego.
            </p>
            
            <p>
                Com o Minhas Oportunidades no GitHub Pages, você pode aproveitar todos os recursos e funcionalidades do aplicativo, sem a necessidade de instalação ou configuração complexa. A simplicidade de uso, a disponibilidade online e a integração perfeita com o GitHub tornam o GitHub Pages uma excelente opção para hospedar e compartilhar o Minhas Oportunidades.
            </p>
        

            <h3>Sistema de dados</h3>
            <hr style="background-color: ${textColor};"/>
            <p>
                O sistema de dados do Minhas Oportunidades funciona de maneira simples e segura. O aplicativo depende do armazenamento local do navegador do usuário, utilizando o localStorage, já que está hospedado no GitHub Pages.
            </p>

            <p>
                Para armazenar as informações, o sistema utiliza dois itens no localStorage: "vagas" e "config". O item "vagas" contém um objeto JSON com os dados das vagas salvas pelo usuário, enquanto o item "config" armazena as configurações específicas definidas pelo usuário.
            </p>

            <p>
                É importante ressaltar que não coletamos dados pessoais dos usuários, como nome, e-mail, número de celular ou endereço. As informações armazenadas são anonimizadas e acessíveis ao próprio usuário de forma legível.
            </p>

            <p>
                Como os dados ficam armazenados no navegador, é possível exportá-los para outros dispositivos através das opções de importação de dados disponíveis no menu do aplicativo. O formato de arquivo utilizado para exportação é o JSON, que contém os dados relacionados às vagas do usuário.
            </p>

            <p>
                Estamos trabalhando para aprimorar o sistema, e em breve implementaremos a criptografia de dados para adicionar uma camada extra de segurança. Dessa forma, garantiremos que as informações dos usuários sejam protegidas e mantidas em sigilo.
            </p>

            <p>
                Acreditamos na importância da privacidade e segurança dos dados dos usuários, e estamos empenhados em proporcionar uma experiência confiável e transparente no uso do Minhas Oportunidades.
            </p>

            <h3>Funcionalidades</h3>
            <hr style="background-color: ${textColor};"/>
            <ol>
                <li>
                    <strong>Gerenciar Vagas:</strong> O Minhas Oportunidades permite que você gerencie todas as suas vagas de emprego em um único lugar. Você pode organizar suas vagas, adicionar notas e manter um registro detalhado de cada oportunidade.
                </li>
                <li>
                    <strong>Salvar Vagas:</strong> Com o Minhas Oportunidades, você pode salvar as vagas de emprego que mais chamam a sua atenção. Basta adicionar a vaga ao aplicativo para acessá-la facilmente posteriormente, sem perder nenhuma oportunidade.
                </li>
                <li>
                    <strong>Editar Vagas:</strong>
                    <ul>
                    <li>
                        <strong>Editar:</strong> Modifique os dados de uma vaga já salva, como título, descrição, localização, requisitos, entre outros. Mantenha suas vagas sempre atualizadas.
                    </li>
                    <li>
                        <strong>Favoritar:</strong> Marque as vagas favoritas para encontrá-las facilmente mais tarde. Destaque as oportunidades que mais lhe interessam e organize-as em uma lista personalizada.
                    </li>
                    <li>
                        <strong>Excluir:</strong> Caso não tenha mais interesse em uma vaga, você pode excluí-la do aplicativo. Mantenha sua lista de vagas organizada e focada apenas nas oportunidades que realmente importam para você.
                    </li>
                    </ul>
                </li>
                <li>
                    <strong>Geração de Estatísticas Personalizadas:</strong> O Minhas Oportunidades oferece estatísticas detalhadas sobre suas aplicações, categorias de vagas e seu comportamento geral no processo de busca por emprego. Visualize dados que ajudarão você a acompanhar seu progresso e melhorar suas estratégias.
                </li>
                <li>
                    <strong>Adição de Vagas por Link (em breve):</strong> Em breve, implementaremos a funcionalidade de adicionar vagas diretamente por meio de links. Simplifique ainda mais o processo de salvar vagas, bastando copiar e colar o link da vaga no aplicativo.
                </li>
                <li>
                    <strong>Filtrar Vagas:</strong> Utilize a funcionalidade de filtrar vagas para encontrar rapidamente as oportunidades que atendam aos seus critérios específicos. Refine sua busca com base em categorias, localização, nível de experiência, entre outros aspectos relevantes.
                </li>
            </ol>

            <p>
            <strong>Adendo:</strong> Estamos constantemente trabalhando para melhorar o Minhas Oportunidades. Nosso objetivo é implementar suporte a banco de dados para oferecer um armazenamento mais robusto e seguro das informações. Além disso, estamos planejando a integração multi-dispositivos, permitindo que você acesse suas vagas de emprego de qualquer lugar e dispositivo.
            </p>

            <h3>Contato</h3>
            <hr style="background-color: ${textColor};"/>
        </div>
    `;

  return about;
}
