export function ModuleDetails() {
  const modules = ['✅ fundamentos', '⏳ front-end', '⏳ back-end', '⏳ cs'];
  return (
    modules.map((module, index) => <p key={ index }>{module}</p>)
  );
}
