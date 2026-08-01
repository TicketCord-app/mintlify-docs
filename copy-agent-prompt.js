// Powers the "Copy agent setup prompt" button on /ai/mcp.
// The button (id="copy-mcp-prompt-btn") copies the full prompt from the
// code block on the same page, identified by its opening sentence.

(function () {
  var PROMPT_MARKER = 'You are connecting to the TicketCord MCP server';
  var RESET_DELAY_MS = 2000;

  function findPromptText() {
    var blocks = document.querySelectorAll('pre');
    for (var i = 0; i < blocks.length; i++) {
      var text = blocks[i].innerText || blocks[i].textContent || '';
      if (text.indexOf(PROMPT_MARKER) !== -1) {
        return text.trim();
      }
    }
    return null;
  }

  function setLabel(button, label) {
    var target = button.querySelector('[data-copy-label]') || button;
    target.textContent = label;
  }

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand('copy');
    } finally {
      document.body.removeChild(area);
    }
  }

  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest
      ? event.target.closest('#copy-mcp-prompt-btn')
      : null;
    if (!button) return;

    var text = findPromptText();
    if (!text) {
      setLabel(button, 'Prompt not found, copy it below');
      return;
    }

    var done = function () {
      setLabel(button, 'Copied! Paste it into your agent');
      button.dataset.copied = 'true';
      setTimeout(function () {
        setLabel(button, 'Copy agent setup prompt');
        delete button.dataset.copied;
      }, RESET_DELAY_MS);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        fallbackCopy(text);
        done();
      });
    } else {
      fallbackCopy(text);
      done();
    }
  });
})();
