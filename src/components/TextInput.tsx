@@ .. @@
   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
     const newText = e.target.value;
     setText(newText);
     onTextChange(newText);
   };