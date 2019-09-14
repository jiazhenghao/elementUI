/*
1.0
Only Call Hooks at the Top Level 
If we want to run an effect conditionally, we can put that condition inside our Hook:
*/
//good:
useEffect(function persistForm() {
  // 👍 We're not breaking the first rule anymore
  if (name !== "") {
    localStorage.setItem("formData", name);
  }
});
//bad:
// 🔴 We're breaking the first rule by using a Hook in a condition
if (name !== "") {
  useEffect(function persistForm() {
    localStorage.setItem("formData", name);
  });
}
