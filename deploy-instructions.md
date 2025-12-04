# GitHub Pages Deployment Instructions

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click "New repository"** (green button)
3. **Repository name**: `quarterly-earnings-presentation`
4. **Description**: "Q4 2024 Earnings Report - Interactive RevealJS Presentation"
5. **Set to Public** (required for free GitHub Pages)
6. **Don't initialize** with README (we already have files)
7. **Click "Create repository"**

## Step 2: Upload Files to GitHub

### Option A: Using Git Command Line
```bash
# Navigate to your project directory
cd "C:\Users\HP\Downloads\New folder\quarterly-earnings-presentation"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Q4 2024 Earnings Presentation"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/quarterly-earnings-presentation.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Web Interface
1. **Go to your new repository** on GitHub
2. **Click "uploading an existing file"**
3. **Drag and drop all files** from your project folder
4. **Commit changes** with message "Initial commit: Q4 2024 Earnings Presentation"

## Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main"
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

## Step 4: Access Your Presentation

Your presentation will be available at:
```
https://YOUR_USERNAME.github.io/quarterly-earnings-presentation/
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Custom Domain (Optional)

If you want a custom domain:
1. **Add CNAME file** to repository root with your domain
2. **Configure DNS** at your domain provider
3. **Update repository settings** under Pages > Custom domain

## Updating the Presentation

To update your presentation:
1. **Make changes** to your local files
2. **Commit and push** changes to GitHub:
   ```bash
   git add .
   git commit -m "Update presentation content"
   git push
   ```
3. **GitHub Pages will automatically update** (may take 1-2 minutes)

## Cache Busting

To force refresh cached content, add version parameters:
- `?v=1` for first update
- `?v=2` for second update
- etc.

Example: `https://YOUR_USERNAME.github.io/quarterly-earnings-presentation/?v=1`

## Troubleshooting

### Common Issues:
1. **404 Error**: Check that repository is public and Pages is enabled
2. **Slow loading**: GitHub Pages can take up to 10 minutes for first deployment
3. **Changes not showing**: Clear browser cache or use version parameter

### Verification Steps:
1. ✅ Repository is public
2. ✅ All files are uploaded
3. ✅ GitHub Pages is enabled
4. ✅ Source is set to "main" branch
5. ✅ index.html is in root directory

## Final URL Format

Your final presentation URL will be:
```
https://[YOUR_GITHUB_USERNAME].github.io/quarterly-earnings-presentation/
```

Example: If your username is "johnsmith", the URL would be:
```
https://johnsmith.github.io/quarterly-earnings-presentation/
```
