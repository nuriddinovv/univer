import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const [navigate, setNavigate] = useState(false);

  function clearLocalstorage() {
    localStorage.removeItem("user");
    setNavigate(true);
    console.log("navigate");
  }

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ backgroundColor: "white", marginTop: "20px" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, at
      voluptatibus! Dignissimos soluta natus voluptatum ab nihil placeat
      temporibus sit animi accusantium, libero nisi alias! Id maxime accusamus
      expedita aperiam nemo repellendus quis dolore ea. Possimus voluptatibus
      totam, eveniet necessitatibus odit fuga sunt amet reprehenderit illo
      cumque atque architecto veritatis vel id at maxime porro similique in
      voluptatum modi sit dolorum libero ea molestiae! Atque a quisquam adipisci
      error officia est, velit deleniti amet, voluptates dolorum qui inventore
      odio minus, repudiandae ipsum. Omnis, odio nisi provident dolore velit
      deleniti. Veniam consectetur, ab est architecto ipsa delectus voluptatem
      nemo optio nisi perferendis ducimus odit minus iure fuga quis eveniet
      atque ipsam eaque sequi repudiandae sapiente qui saepe repellat. Commodi
      amet quia dignissimos. Repellendus, tempora quis nemo voluptas reiciendis
      nihil neque quo consectetur, deleniti asperiores rerum eveniet fugit
      veritatis quod at deserunt, perspiciatis vero necessitatibus numquam? Ut
      at mollitia voluptas maxime aliquam vero ex quod dolor doloremque ea quos
      omnis similique, officiis vel blanditiis nesciunt, rerum dolore numquam
      doloribus? Voluptates mollitia, quibusdam sit animi hic eos, sint corporis
      quidem ipsa doloremque sapiente. Nobis iure ipsa dolores minus earum,
      fugiat commodi accusantium, debitis corporis voluptas natus quam neque
      aperiam culpa aspernatur architecto voluptates quidem praesentium officiis
      saepe recusandae ad veniam tempore. Ratione illum, expedita vero saepe nam
      rem iste beatae doloribus odit ducimus voluptas exercitationem quo dolor
      dolorem ipsa libero quisquam qui enim iure voluptates ab quidem voluptatum
      sunt. Dolorem sit numquam temporibus eum fuga minus voluptate suscipit
      impedit. Assumenda, molestias a, harum beatae et eligendi tempora
      laboriosam nemo quae asperiores fugiat repellendus quis autem facere
      sapiente inventore est optio cupiditate. Iure aut quod, facere unde
      laudantium dolorum qui fugiat est ea beatae hic a molestiae dolor modi,
      quisquam quidem nam voluptas amet rem voluptatibus labore! Iure qui fugit
      deleniti in porro id totam delectus est itaque recusandae sed, laboriosam
      expedita sapiente debitis cum fugiat harum cumque inventore non.
      Perspiciatis sequi facilis corrupti illum odit corporis ea distinctio
      debitis quisquam quibusdam sint ipsum quos neque, minus reiciendis
      voluptate optio error doloribus consequuntur sed vero modi sapiente culpa
      assumenda. Voluptas beatae itaque et vero autem odio laudantium porro
      deleniti molestiae! Laudantium, ea. Velit, sapiente officiis eligendi
      harum accusamus officia praesentium magni sunt, aspernatur nostrum quaerat
      esse sequi facilis cumque minima, tempora placeat! Nam, consequatur maxime
      perferendis incidunt dolor totam porro eligendi, labore repellat delectus
      cum doloremque ducimus omnis quam, eos id cumque quo cupiditate a
      excepturi molestias. Facilis sapiente rerum dolorum repudiandae pariatur
      voluptatem voluptas, similique distinctio eligendi, corrupti quis optio
      sequi hic asperiores, quasi dolorem ipsa! Voluptas iusto voluptatibus
      obcaecati laudantium assumenda, placeat eius officia tempore quia
      architecto quae totam dolore cumque eaque molestias excepturi ratione.
      Repudiandae provident illo distinctio tempora ea nostrum officiis in
      perferendis aperiam perspiciatis fuga ipsam doloribus dolorum rerum
      tenetur vero id blanditiis quisquam similique, earum, voluptate voluptatum
      quis totam veniam? Ex, eligendi cumque expedita beatae ut quibusdam eum et
      sapiente natus asperiores totam blanditiis quo nesciunt sunt quaerat, illo
      est pariatur harum! Quibusdam excepturi placeat quam impedit atque.
    </div>
  );
}
