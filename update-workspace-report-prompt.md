# Workspace Report Update Prompt

Use this prompt to update the workspace analysis report:

"Update the workspace analysis report in workspace-report.md with the following requirements:

1. **Version Updates**
   - Scan and update all version numbers for:
     - VS Code extensions
     - CLI tools (Node, Python, Docker, etc.)
     - Dependencies in package.json and pyproject.toml
     - System information (OS, memory usage)

2. **Security Status**
   - Check for new CVEs in dependencies
   - Verify Docker container health checks
   - Review environment variable usage
   - Scan Git status and branch health

3. **Infrastructure Changes**
   - Update port mappings and service connections
   - Refresh file statistics and types
   - Check for new development tools/extensions
   - Review active language servers

4. **Performance Metrics**
   - Add memory usage trends
   - Include disk space utilization
   - List active processes and resource usage
   - Document any performance bottlenecks

5. **New Recommendations**
   - Identify outdated dependencies
   - Suggest security improvements
   - List missing development tools
   - Update team onboarding steps

Maintain the existing Markdown format with emoji indicators and tables. Add timestamps for when each section was last updated."

## Usage Instructions

1. Save this prompt for periodic workspace report updates
2. Run the prompt in ACT MODE to execute the update
3. Review and verify the updated report
4. Commit changes to version control

## Update Frequency

- Run weekly for development environments
- Run after major system changes
- Run before team onboarding
- Run after security incidents

## Required Tools

- VS Code
- Git
- Node.js
- Python
- Docker
