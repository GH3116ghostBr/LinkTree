import { Input } from "../Input";

type Variant = "default";

type MainEditProps = {
  name: string;
  setName: (value: string) => void;

  Github: string;
  setGithub: (value: string) => void;

  Linkedin: string;
  setLinkedin: (value: string) => void;

  Instagram: string;
  setInstagram: (value: string) => void;

  Tiktok: string;
  setTiktok: (value: string) => void;

  Facebook: string;
  setFacebook: (value: string) => void;

  links: { name: string; url: string }[];

  handleAddLink: () => void;
  handleLinkChange: (index: number, field: string, value: string) => void;

  variant?: Variant;
};

export function MainEdit({
  name,
  setName,
  Github,
  setGithub,
  Linkedin,
  setLinkedin,
  Instagram,
  setInstagram,
  Tiktok,
  setTiktok,
  Facebook,
  setFacebook,
  links,
  handleAddLink,
  handleLinkChange,
  variant = "default"
}: MainEditProps) {

  return (
    <main className="w-8/12 p-4">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

        <Input
          name="Nome"
          id="name"
          placeholder="Ex: João"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          name="Github"
          id="Github"
          placeholder="Ex: joao-github"
          value={Github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <div className="grid grid-cols-4 gap-4">
          <Input
            name="Linkedin"
            id="Linkedin"
            placeholder="Ex: joao-linkedin"
            value={Linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />

          <Input
            name="Instagram"
            id="Instagram"
            placeholder="Ex: joao-instagram"
            value={Instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <Input
            name="TikTok"
            id="Tiktok"
            placeholder="Ex: joao.tiktok"
            value={Tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />

          <Input
            name="Facebook"
            id="Facebook"
            placeholder="Ex: joao.fb"
            value={Facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {links.map((link, index) => (
            <div className="flex gap-4" key={index}>
              <Input
                name={`Link ${index + 1}`}
                id={`link-${index}`}
                placeholder="Ex: Portfólio"
                value={link.name}
                onChange={(e) =>
                  handleLinkChange(index, "name", e.target.value)
                }
              />

              <Input
                name="URL do Link"
                id={`link-url-${index}`}
                placeholder="Ex: https://meusite.com"
                value={link.url}
                onChange={(e) =>
                  handleLinkChange(index, "url", e.target.value)
                }
              />
            </div>
          ))}

          <button
            className="bg-white rounded cursor-pointer px-4 py-2 hover:opacity-80"
            onClick={handleAddLink}
          >
            Adicionar Link
          </button>
        </div>

      </form>
    </main>
  );
}